import React, { useState, useEffect } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { v4 as uuidv4 } from 'uuid';

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userId] = useState(() => {
        let id = localStorage.getItem('chatkit_user_id');
        if (!id) {
            id = uuidv4();
            localStorage.setItem('chatkit_user_id', id);
        }
        return id;
    });

    const { control } = useChatKit({
        locale: 'es-ES',
        startScreen: {
            greeting: "¿En qué puedo ayudarte hoy?",
            prompts: [
                {
                    label: "Ver modelos de casas",
                    prompt: "¿Qué modelos de casas tienen disponibles?",
                },
                {
                    label: "Consultar precio total",
                    prompt: "¿Cuál es el costo total con instalación incluida?",
                },
                {
                    label: "Tiempo de entrega",
                    prompt: "¿Cuánto tiempo demora la entrega e instalación?",
                }
            ]
        },
        composer: {
            placeholder: "Escribe tu duda aquí...",
        },
        api: {
            async getClientSecret() {
                try {
                    const response = await fetch('https://n8n-hnz3pm2nea-ue.a.run.app/webhook/chatkit/tiny-houses', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ userId }),
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    return data.client_secret;
                } catch (error) {
                    console.error('Error fetching ChatKit session:', error);
                    throw error;
                }
            },
        },
    });

    return (
        <div className="chat-assistant-wrapper">
            {/* Toggle Button */}
            <button
                className={`chat-toggle-btn ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat assistant"
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div className={`chatkit-window ${isOpen ? 'open' : ''}`}>
                <div className="chatkit-header">
                    <div className="header-info">
                        <span className="dot"></span>
                        <div>
                            <h3>Soluciones Habitacionales</h3>
                            <p>En línea • Responde al instante</p>
                        </div>
                    </div>
                </div>
                <div className="chatkit-body">
                    <ChatKit control={control} />
                </div>
            </div>

            <style>{`
                .chat-assistant-wrapper {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    z-index: 1000;
                    font-family: var(--font-body);
                }

                .chat-toggle-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 24px rgba(11, 163, 152, 0.4);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: none;
                    cursor: pointer;
                    position: relative;
                }

                .chat-toggle-btn::after {
                    content: 'Chateá con nuestro asistente';
                    position: absolute;
                    right: 75px;
                    background: white;
                    color: var(--color-text);
                    padding: 8px 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 500;
                    white-space: nowrap;
                    box-shadow: var(--shadow-md);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateX(10px);
                    transition: all 0.3s ease;
                    border: 1px solid var(--color-border);
                    pointer-events: none;
                }

                .chat-toggle-btn:hover::after {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(0);
                }

                .chat-toggle-btn.active::after {
                    display: none;
                }

                .chat-toggle-btn:hover {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 12px 32px rgba(11, 163, 152, 0.5);
                }

                .chat-toggle-btn.active {
                    transform: rotate(90deg);
                    background: #1A1C1E;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
                }

                .chat-toggle-btn svg {
                    width: 28px;
                    height: 28px;
                    stroke-width: 2px;
                }

                .chatkit-window {
                    position: absolute;
                    bottom: 80px;
                    right: 0;
                    width: clamp(320px, 90vw, 400px);
                    height: clamp(500px, 70vh, 700px);
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 12px 48px rgba(0,0,0,0.15);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px) scale(0.95);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    border: 1px solid var(--color-border);
                }

                .chatkit-window.open {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0) scale(1);
                }

                .chatkit-header {
                    padding: 16px 20px;
                    background: white;
                    border-bottom: 1px solid var(--color-border);
                    user-select: none;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .header-info .dot {
                    width: 10px;
                    height: 10px;
                    background: #10B981;
                    border-radius: 50%;
                    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
                    animation: pulse-dot 2s infinite;
                }

                .header-info h3 {
                    font-size: 16px;
                    margin: 0;
                    font-weight: 600;
                    color: var(--color-text);
                }

                .header-info p {
                    font-size: 12px;
                    color: var(--color-text-muted);
                    margin: 2px 0 0;
                }

                .chatkit-body {
                    flex: 1;
                    overflow: hidden;
                }

                /* Ensure ChatKit takes full height */
                .chatkit-body [role="region"] {
                    height: 100% !important;
                }

                @keyframes pulse-dot {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.2); opacity: 0.7; }
                    100% { transform: scale(1); opacity: 1; }
                }

                @media (max-width: 480px) {
                    .chatkit-window {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 0;
                        z-index: 2000;
                    }
                    .chat-assistant-wrapper {
                        bottom: 20px;
                        right: 20px;
                        left: auto;
                    }
                }
            `}</style>
        </div>
    );
};

export default ChatAssistant;
