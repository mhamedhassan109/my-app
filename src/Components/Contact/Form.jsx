import React, { useState } from 'react'
import Home from '../home/Home'
import { fas } from '@fortawesome/free-solid-svg-icons'

function Form() {





    // function changename 
    const [name, setname] = useState("")
    const [par, setpar] = useState(false)
    const handelerName = (e) => {
        setname(e.target.value)

    }


    // function changeEmail
    const [email, setemail] = useState("")
    const [par2, setpar2] = useState(false)
    const handelermail = (e) => {
        setemail(e.target.value)
    }


    // function phone number 
    const [phone, setphone] = useState("")
    const [alertPhone, setalertPhone] = useState(false)

    const handelerphone = (e) => {
        setphone(e.target.value)
    }


    // function select 
    const [selection, setselection] = useState("")
    const [alertselect, setalertselect] = useState(false)
    const handlerselect = (e) => {

        setselection(e.target.value)

    }


    // function textaeea
    const [text, settext] = useState("")
    const [alerttext, setalerttext] = useState(false)
    const handlerText = (e) => {
        settext(e.target.value)
    }


    // function submit form 
    const handelerForm = (e) => {
        e.preventDefault();

        //name 

        if (name === "") {
            setpar(true)
        } else {
            console.log(name)
            setpar(false)
        }

        // email

        if (email === "") {
            setpar2(true)
        } else {
            console.log(email)
            setpar2(false)
        }

        // phone number

        if (phone === "") {
            setalertPhone(true)
        } else {
            console.log(phone)
            setalertPhone(false)
        }

        // selectin

        if (selection === "") {
            setalertselect(true)
        } else {
            console.log(selection)
            setalertselect(false)
        }

        // textarea
        if (text === "") {
            setalerttext(true)
        } else {
            console.log(text)
            setalerttext(false)
        }


    }



    return (
        <div>
            <form action="" onSubmit={handelerForm}>
                <input type="text" placeholder="your name" onChange={handelerName} />
                {
                    par && (
                        <p>no empty</p>
                    )
                }
                <input type="email" placeholder="email" onChange={handelermail} />

                {
                    par2 && (
                        <p>empty emill</p>
                    )
                }

                <input type="text" placeholder="phone number" onChange={handelerphone} />

                {alertPhone && (
                    <p>empty phone number</p>
                )}
                <select name="" id="" onChange={handlerselect}>
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                </select>
                {alertselect && (
                    <p>chose select</p>
                )}
                <textarea placeholder="type massage" onChange={handlerText}></textarea>
                {alerttext && (
                    <p>empty massage</p>
                )}
                <input type="submit" value="submit" className="submit" />
            </form>
        </div>
    )
}

export default Form