/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import React from 'react'

interface HeaderProps {
  isOpen: boolean;
  onToggleSidebar: () => void;
}

function Header({ isOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header css={headerStyle}>
      <div 
        className="sidebar-btn" 
        onClick={onToggleSidebar}
      >{isOpen ? '🫥':'😐'}
      </div>
      <h1>Board</h1>
      <div className="right">Login</div>
    </header>
  )
}

export default Header

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;

  .sidebar-btn, .right {
    cursor: pointer;
  }

  .sidebar-btn {
    font-size: 24px;
    display: inline-block;
    transition: transform 0.25s ease;
  }

  .sidebar-btn:active {
    transform: scale(0.9);
  }

  h1 {
    flex: 2;
    text-align: center;
    color: var(--primary);
  }


`;