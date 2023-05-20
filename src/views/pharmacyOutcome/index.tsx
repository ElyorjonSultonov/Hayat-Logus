import { Button, InputLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { nAptekaMenus } from '../../constants/menu'
import classes from './pharmacy.module.scss'
import { ReactComponent as BookIcon } from '../../assets/icons/book.svg'
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh-2.svg'
import { ReactComponent as CardIncomeIcon } from '../../assets/icons/cart-income.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search-alt-2.svg'
import { ReactComponent as MoneyAddIcon } from '../../assets/icons/money-add.svg'
import { ReactComponent as CoinAddIcon } from '../../assets/icons/monent.svg'
import { ReactComponent as ScalerIcon } from '../../assets/icons/ruler1.svg'
import { ReactComponent as ScalerIconDown } from '../../assets/icons/ruler.svg'
import { ReactComponent as WalletMoneyIcon } from '../../assets/icons/wallet-money.svg'

const PharmacyOutcomeView = () => {
    return (
        <div>
            <div className={classes.toolbox}>
                {nAptekaMenus['top'].map((item, i) => (
                    <Link className={classes.submenu} to={item.path} key={i}>
                        <img src={item.icon} alt="" />
                        {item.button}
                    </Link>
                ))}
            </div>
            <div className={classes.toolbox}>
                {nAptekaMenus['center'].map((item, i) => (
                    <Link className={classes.submenu} to={item.path} key={i}>
                        <img src={item.icon} alt="" />
                        {item.button}
                    </Link>
                ))}
            </div>
            <div className={classes.content}>
                <Box sx={{ marginBottom: '30px' }}>
                    <InputLabel className={classes.label}>Филиал</InputLabel>
                    <Box sx={{ display: 'flex' }}>
                        <TextField className={classes.textField} id="outlined-basic" variant="outlined" />
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><BookIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><RefreshIcon /></Button>
                    </Box>
                </Box>
                <Box sx={{ marginBottom: '30px' }}>
                    <InputLabel className={classes.label}>Оптовая торговля</InputLabel>
                    <Box sx={{ display: 'flex' }}>
                        <TextField className={classes.textField} id="outlined-basic" variant="outlined" />
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><BookIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><CardIncomeIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><RefreshIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><SearchIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><MoneyAddIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><CoinAddIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><ScalerIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><ScalerIconDown /></Button>
                    </Box>
                </Box>
                <Box sx={{ marginBottom: '30px' }}>
                    <InputLabel className={classes.label}>Перемещение</InputLabel>
                    <Box sx={{ display: 'flex' }}>
                        <TextField className={classes.textField} id="outlined-basic" variant="outlined" />
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><BookIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><SearchIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><WalletMoneyIcon /></Button>
                    </Box>
                </Box>

                <Box sx={{ marginBottom: '30px' }}>
                    <InputLabel className={classes.label}>Приходы</InputLabel>
                    <Box sx={{ display: 'flex' }}>
                        <TextField className={classes.textField} id="outlined-basic" variant="outlined" />
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><BookIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><SearchIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><WalletMoneyIcon /></Button>
                    </Box>
                </Box>

                <Box sx={{ marginBottom: '30px' }}>
                    <InputLabel className={classes.label}>Розничная торговля</InputLabel>
                    <Box sx={{ display: 'flex' }}>
                        <TextField className={classes.textField} id="outlined-basic" variant="outlined" />
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><BookIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><SearchIcon /></Button>
                        <Button className={`${classes.secondaryButton} ${classes.ml10}`} variant="contained"><WalletMoneyIcon /></Button>
                    </Box>
                </Box>

            </div>
        </div>
    )
}

export default PharmacyOutcomeView