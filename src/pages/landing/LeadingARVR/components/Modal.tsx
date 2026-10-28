import React from 'react';
import { CloseIcon } from './icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-bold mb-1 text-white">Get a Free Consultation</h3>
                <p className="text-gray-300 mb-6">Let's discuss how we can elevate your business.</p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="modal-name" className="sr-only">Full Name</label>
                        <input type="text" name="name" id="modal-name" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                        <label htmlFor="modal-email" className="sr-only">Work Email</label>
                        <input type="email" name="email" id="modal-email" placeholder="Work Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                        <label htmlFor="modal-company" className="sr-only">Company</label>
                        <input type="text" name="company" id="modal-company" placeholder="Company" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                        <label htmlFor="modal-message" className="sr-only">How can we help?</label>
                        <textarea name="message" id="modal-message" rows={3} placeholder="How can we help?" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:from-purple-700 hover:to-blue-600 transition-all transform hover:scale-105">
                        <span>Request Demo</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;