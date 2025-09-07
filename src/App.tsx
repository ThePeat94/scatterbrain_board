import 'src/App.css';
import { Card, CardContent, CardHeader, Grid, Stack, Switch, Typography } from '@mui/material';

type RiskLevelType = 'LOW' | 'MEDIUM' | 'HIGH';

type TaskType = {
    title: string;
    description: string;
    risk: RiskLevelType;
};

const tasks: TaskType[] = [{
    title: 'Windows closed',
    description: 'Make sure all windows are closed before leaving the house.',
    risk: 'MEDIUM',
}, {
    title: 'Turn off lights',
    description: 'Ensure all lights are turned off to save energy.',
    risk: 'LOW',
}, {
    title: 'Lock doors',
    description: 'Ensure all doors are locked to prevent unauthorized access.',
    risk: 'HIGH',
}, {
    title: 'Car locked',
    description: 'Make sure your car is locked and windows are closed.',
    risk: 'HIGH',
}];

const App = () => {
    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={2} pt={4}>
                <Typography variant={'h3'}>Scatterbrain Board</Typography>
                <Grid container={true} direction={'column'} spacing={2} width={'100%'}>
                    {tasks.map((task, index) => (
                        <Grid size={12}>
                            <Card key={index}>
                                <CardHeader
                                    title={task.title}
                                    subheader={`Risk Level: ${task.risk}`}
                                    action={<Switch/>}
                                />
                                <CardContent>
                                    <Typography>{task.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </>
    );
};

export default App;
