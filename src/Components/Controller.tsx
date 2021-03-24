import {useState} from 'react';
import {ShowControlsButton, ControlPanel} from './Controller.styles'
import {ReactComponent as SatelliteIcon} from '../assets/rocket-launch.svg'

import IssStats from './IssStats'
import IssAboveMe from './IssAboveMe'

const Controller : React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
        <ShowControlsButton onClick={() => {setVisible(!visible)}}>
            <SatelliteIcon />
        </ShowControlsButton>
        <ControlPanel style={{ transform: `translateX(${visible ? '0' : '100%'})`}}>
            <IssStats />
            <IssAboveMe />
        </ControlPanel>
        </>
    )
}

export default Controller