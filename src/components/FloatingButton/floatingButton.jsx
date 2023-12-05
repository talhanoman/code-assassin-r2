import React from 'react'
import { IoCallOutline, IoChatboxOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
export default function FloatingButton() {
    return (
        <div class="floating-container">
            <div class="floating-button">+</div>
            <div class="element-container">

                <a href="google.com"> <span class="float-element tooltip-left">
                    <IoCallOutline className='text-white' />
                </span>
                </a>
                <span class="float-element">
                    <MdOutlineEmail className='text-white' />
                </span>
                <span class="float-element">
                    <IoChatboxOutline className='text-white' />
                </span>
            </div>
        </div>
    )
}
