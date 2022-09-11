import React from 'react'
import { RiCopyrightLine } from "react-icons/ri";
export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='foorter_content d-flex bg-secondary justify-content-center p-2' style={{color:'#fff'}}>
            <div className='' id='text'>
            Copyright &nbsp;<RiCopyrightLine/> 2022 , Book Archive &nbsp;
            </div>
            <div className='' id='text'>All Right Reserved</div>
        </div>
    </div>
  )
}
