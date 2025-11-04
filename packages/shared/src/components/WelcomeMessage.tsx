import React from 'react';

export function WelcomeMessage() {
  return (
    <div style={{ 
      padding: '16px', 
      backgroundColor: '#f0f8ff', 
      borderRadius: '8px',
      textAlign: 'center' as const
    }}>
      <p style={{ margin: 0, fontSize: '16px', color: '#333' }}>
        Ẹ kú àárọ̀! Welcome to your Yoruba learning journey! 🌟
      </p>
      <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#666' }}>
        Start learning Yoruba language with interactive lessons and cultural context.
      </p>
    </div>
  );
}