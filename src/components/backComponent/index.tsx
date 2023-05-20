import { Button } from '@mui/material'
import React from 'react'
import classes from './index.module.scss'
import { ReactComponent as BackIcon } from '../../assets/icons/arrow-circle-left.svg'
import { useNavigate } from 'react-router-dom'

type BackComponentProps = {
    title: string;
    children?: React.ReactNode;
};

const BackComponent = (props: BackComponentProps) => {
    const navigate = useNavigate()
    const { title, children } = props
    return (
        <div className={classes.header}>
            <Button className={classes.backComponentButton} onClick={() => navigate(-1)}>
                <BackIcon />
                {title}
            </Button>
            {children && children}
        </div>
    )
}

export default BackComponent