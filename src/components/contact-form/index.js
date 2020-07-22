import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import Button from '../shared/button'
import Form, { Input, Textarea, FormGroup } from '../shared/form'
import { FormWrap } from './contact-form.stc'

const ContactForm = ({ inputStyle, textareaStyle, url }) => {
    console.log(url)
    const { register, handleSubmit, errors, reset } = useForm({
        mode: "onBlur"
    })
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [value, setValue] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
            setValue({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }
    };
    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: url,
            data
        })
            .then(res => {
                handleServerResponse(true, "Thanks! for being with us", form);
            })
            .catch(err => {
                handleServerResponse(false, err.response.data.error, form);
            });
    }

    const onChangeHandler = e => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    return (
        <FormWrap>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <FormGroup className="halfwidth">
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            onChange={onChangeHandler}
                            ref={register({
                                required: 'Name Required',
                            })}
                            {...inputStyle}
                        />
                        {errors.name && <span className="error">{errors.name.message}</span>}
                    </FormGroup>
                    <FormGroup className="halfwidth">
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            onChange={onChangeHandler}
                            ref={register({
                                required: 'Email Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup {...textareaStyle}>
                        <Textarea
                            name="message"
                            placeholder="Messages"
                            onChange={onChangeHandler}
                            ref={register({
                                required: 'Message Required',
                                minLength: { value: 10, message: "Minimum length is 10" }
                            })}
                        />
                        {errors.message && <span className="error">{errors.message.message}</span>}
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup>
                        <Button type="submit" disabled={serverState.submitting}>Send Now</Button>
                        {serverState.status && (
                            <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                                {serverState.status.msg}
                            </p>
                        )}
                    </FormGroup>
                </div>
            </Form>
        </FormWrap>
    )
}

ContactForm.propTypes = {
    inputStyle: PropTypes.object,
    textareaStyle: PropTypes.object
}

ContactForm.defaultProps = {
    inputStyle: {
        responsive: {
            xsmall: {
                mb: '20px'
            }
        }
    },
    textareaStyle: {
        mt: '40px',
        mb: '40px',
        responsive: {
            xsmall: {
                mt: '25px',
                mb: '25px'
            }
        }
    }
}

export default ContactForm
