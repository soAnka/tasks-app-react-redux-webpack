import React, { useState, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../actions/todo';
import { addGoal } from '../actions/goals';
import { formatNewTodo } from '../utils/_DATA'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import Alert from '@mui/material/Alert';
import { AddBtn, Item, ItemHeader } from '../styles/components/AddTodo.style';

const labels = {
    1: 'Super easy!',
    2: 'Easy',
    3: 'Medium',
    4: 'Difficult',
    5: 'Super difficult!',
};

function getLabelText(value) {
    return `${value} Circle${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const AddForm = ({userChoice}) => {
    const [value, setValue] = React.useState(1);
    const [hover, setHover] = React.useState(-1);
    const [text, setText] = useState('')
    const [error, setError] = useState(null)
    const [successInfo, setSuccessInfo] = useState('')
    const inputAdd = useRef(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = formatNewTodo({ text, value })

        if (text !== '') {
            userChoice === 'todos' ? dispatch(addTodo(todo)) : dispatch(addGoal(todo))
            setText('')
            setValue(1)
            setSuccessInfo(`New todo was added!`)
        } else {
            setError('Input is empty. Please add some text - title of your todo.')
        }
        // setSuccessInfo('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
        document.activeElement === inputAdd.current ? (setError(null), setSuccessInfo('')) :  setError('')
    }


    return (
        <Item >
            <ItemHeader p={1}>
                <strong>Title</strong><i> of your new {userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 4))}</i>
            </ItemHeader>
            <form>
                {error ? <Alert severity="info">{error}</Alert> : null}
                {successInfo ? <Alert severity="success">{successInfo}</Alert> : null}
                <input placeholder='Fill the input with your new todo' type="text" ref={inputAdd} value={text} onChange={handleChange} />
            </form>
            <ItemHeader p={1}>
                <strong>Hardness</strong><i> of your new {userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 4))}</i>
            </ItemHeader>
            <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                icon={<CircleIcon fontSize='inherit' />}
                emptyIcon={<CircleIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
            <AddBtn variant='contained' onClick={handleSubmit} startIcon={<AddIcon />}>
                Add
            </AddBtn>
        </Item>
    )
}

const mapStateToProps = ({ todos, goals, userChoice }) => {
    const dataList = userChoice === 'todos' ? Object.keys(todos).map((t) => todos[t]) : Object.keys(goals).map((g) => goals[g])

    return { dataList, goals, userChoice }
}

export default connect(mapStateToProps)(AddForm);