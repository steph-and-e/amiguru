import React from 'react'
import { FiHome } from "react-icons/fi";
import Button from './Button';

export default function Sidebar() {
    return (
        <aside id="sidebar">
            <div>
                <Button id="new-pattern-button" colour="purple" text="+ New Pattern"/>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item active">
                    <a href="">
                        <FiHome className="sidebar-icon"/> Home
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <FiHome className="sidebar-icon"/> Projects
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <FiHome className="sidebar-icon"/> Templates
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <FiHome className="sidebar-icon"/> Marketplace
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <FiHome className="sidebar-icon"/> Trash
                    </a>
                </li>
            </ul>
        </aside>
    )
}