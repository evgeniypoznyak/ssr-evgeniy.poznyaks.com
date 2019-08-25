import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PublicIcon from '@material-ui/icons/Public';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Box from '@material-ui/core/Box';
import ScrollDialog from '../../components/UI/Dialog/ScrollDialog';
import DetailedProject from './DetailedProject/DetailedProject';
import {getMonthAndDay} from '../../shared/utility';

const useStyles = makeStyles(theme => ({
    sliderRoot: {
        maxWidth: 400,
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        margin: 10,
        marginTop: 30,
        boxShadow: '10px 10px 31px -5px rgba(0,0,0,0.55)',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {},
    smallAvatar: {
        width: 25,
        height: 25,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 'auto',
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },

}));


export default function Project(props) {
    const images = props.project.images;
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    let slider = null;

    if (
        props.project.images &&
        props.project.images.length > 0 &&
        props.project.images[0].path &&
        props.project.images[0].path.length > 0
    ) {
        slider = <div className={classes.sliderRoot}>

            <Paper square elevation={0} className={classes.header}>
                <Typography variant="subtitle1">{images[activeStep].label}</Typography>
            </Paper>
            <img
                className={classes.img}
                src={images[activeStep].path}
                alt={images[activeStep].label}
            />
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                        Back
                    </Button>
                }
            />
        </div>;
    }
    let cardImage = null;
    if (props.project.cardCover.length > 0) {
        cardImage = <CardMedia
            className={classes.media}
            image={props.project.cardCover}
            title={props.project.name}
        />;
    }

    let avatarProject = null;
    if (props.project.logo && props.project.logo.length > 0) {
        avatarProject = <Avatar aria-label="Project" src={props.project.logo} className={classes.avatar}/>;
    }

    let dateCreated = null;
    if (props.project.dateCreated && props.project.dateCreated.length > 0) {
        dateCreated = 'Created: ' + getMonthAndDay(props.project.dateCreated);
    }

    let gitHubProjectLink = null;
    if (props.project.github && props.project.github.length > 0) {
        gitHubProjectLink = <IconButton aria-label="GitHub" target={'_blank'} href={props.project.github}>
            <Avatar aria-label="Project" src={'/assets/projects/github-logo.png'}
                className={classes.smallAvatar}/>
        </IconButton>;
    }

    let companyName = null;
    if (props.project.companyName && props.project.companyName.length > 0) {
        companyName = <Box width="90%" display="flex" flexDirection="row" justifyContent="flex-end">
            <div>Company: {props.project.companyName}</div>
        </Box>;
    }

    let website = null;
    if (props.project.website && props.project.website.length > 0) {
        website = <IconButton aria-label="Website" target={'_blank'} href={props.project.website}>
            <PublicIcon/>
        </IconButton>;
    }

    let longDescription = null;
    if (props.project.longDescription && props.project.longDescription.length > 0) {
        longDescription = <Grid container justify={'flex-end'}>
            <ScrollDialog title={props.project.name}>
                <DetailedProject description={props.project.longDescription}/>
            </ScrollDialog>
        </Grid>;
    }
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={avatarProject}
                title={props.project.name}
                subheader={dateCreated}
                content={'test'}
            />
            {companyName}
            {slider || cardImage}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.project.shortDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {gitHubProjectLink}
                {website}
                {longDescription}
            </CardActions>
        </Card>
    );
}
