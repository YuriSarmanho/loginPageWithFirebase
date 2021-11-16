import React,{useRef} from 'react';
import { Form ,Button ,Card } from 'react-bootstrap'

export default function SingUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()


    return (
       <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sing Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>PassWord</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>PassWord Cofirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button className='w-100' type='submit'>Sing Up</Button>
                </Form>
            </Card.Body>
        </Card>


        <div className= 'w-100 text-center mt-2'>
            Already have  an account? Log In 
        </div>
       </>
    );
}
