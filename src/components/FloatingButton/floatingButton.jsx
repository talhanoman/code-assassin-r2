import React, { useState, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay';
// import { MdOutlineEmail } from "react-icons/md";
import { User11, logo } from '../imagepath'
import { MessageBox, Input, ChatItem } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
export default function FloatingButton() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div class="floating-container">
            <div onClick={() => setShow(!show)} ref={target} class="floating-button">
                <img src={logo} alt="Logo" className='mw-100 mh-100 p-1' />
            </div>

            <Overlay target={target.current} show={show} placement="top">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                }) => (
                    <div
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(10,19,63, 0.8)',
                            padding: '2px 2px',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        <ChatScreen />
                    </div>
                )}
            </Overlay>
        </div>
    )
}


const ChatScreen = () => {
    const inputRef = useRef(null);
    const [messages, setMessages] = useState([
        {
            position: 'left',
            type: 'text',
            text: 'Hello, how can I help you?',
        },
        {
            position: 'right',
            type: 'text',
            text: 'Hi! I have a question about your products.',
        },
    ]);

    const handleSendMessage = (text) => {
        const newMessage = {
            position: 'right',
            type: 'text',
            text,
        };

        setMessages([...messages, newMessage]);    
    };

    return (
        <div className='rounded-md' style={{ maxWidth: '400px', margin: 'auto' }}>
            <ChatItem
                avatar={User11}
                alt={'John Doe'}
                title={'John Doe'}
                subtitle={'Support Team Representative'}
            />

            <MessageBox
                position={'left'}
                type={'text'}
                text={'Hello, how can I help you?'}
            />

            {messages.map((message, index) => (
                <MessageBox key={index} {...message} />
            ))}

            {/* Input area for sending new messages */}
            <hr className='text-white' />
            <div className="d-flex mw-100 align-items-center pb-2">
                <div className=" w-75 px-2">
                    <input
                        ref={inputRef}
                        type="text"
                        className="form-control-sm w-100"
                        placeholder="Write Message"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSendMessage(e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                </div>             
                <button className='w-25 btn-sm btn-primary me-2' onClick={() => {
                    handleSendMessage(inputRef.current.value)
                    inputRef.current.value = ''
                }}>
                    Send
                </button>
            </div>

        </div>
    );
};
