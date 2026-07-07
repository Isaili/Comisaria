'use client';

import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Fingerprint, 
  ShieldCheck, 
  Mail, 
  Leaf 
} from 'lucide-react';

export default function LoginCopainala() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>

      <div className="w-full max-w-md z-10">
        
        {/* --- HEADER --- */}
        <header className="flex items-center justify-between mb-10">
          {/* Escudo México */}
          <div className="w-16 sm:w-20">
            <img 
              src="https://th.bing.com/th/id/R.1ec4f3cefeefdc9c8463c6fca2da4e63?rik=POmiAu2hUvchEQ&pid=ImgRaw&r=0" 
              alt="Escudo de México" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Textos Centrales */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-xl sm:text-2xl font-serif text-gray-900 leading-tight">
              Casa de Bienes<br />Comunales
            </h1>
           
            <h2 className="text-3xl text-[#C09E5F] mt-1 mb-2 font-[cursive]">
              "Copainalá"
            </h2>
            <p className="text-[10px] sm:text-xs font-bold text-gray-600 tracking-widest uppercase">
              Clave: 07-021-20001-9
            </p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-600 tracking-widest uppercase">
              Periodo 2026-2029
            </p>
          </div>

          {/* Escudo Chiapas */}
          <div className="w-12 sm:w-16">
            <img 
              src="https://tse1.explicit.bing.net/th/id/OIP.8C8vXyoLrLsLUNeSI1cX2gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="Escudo de Chiapas" 
              className="w-full h-auto object-contain"
            />
          </div>
        </header>

        {/* --- FORMULARIO --- */}
        <div className="w-full">
          {/* Títulos */}
          <div className="flex items-center gap-2 mb-1">
            <Leaf className="w-6 h-6 text-[#C09E5F]" />
            <h2 className="text-3xl font-bold font-serif text-gray-900">Bienvenido</h2>
          </div>
          <p className="text-gray-500 text-sm mb-8">
            Inicia sesión en tu cuenta o <a href="#" className="font-bold text-gray-700 hover:text-[#C09E5F] transition-colors">solicita acceso</a>
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Usuario */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Usuario o correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:ring-[#C09E5F] focus:border-[#C09E5F] bg-white transition-colors"
                  placeholder="ej. capturista@comisaria.gob.mx"
                />
              </div>
            </div>

            {/* Input Contraseña */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:ring-[#C09E5F] focus:border-[#C09E5F] bg-white transition-colors"
                  placeholder="ingresa tu contraseña"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Opciones extra (Recordar / Olvidaste) */}
            <div className="flex items-center justify-between text-sm mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-[#304033] focus:ring-[#304033] accent-[#304033]"
                  defaultChecked
                />
                <span className="text-gray-600 font-medium">Recordar mi sesión</span>
              </label>
              <a href="#" className="text-gray-600 font-medium hover:text-[#C09E5F] transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón Principal */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#213326] to-[#36493A] hover:from-[#1b2a1f] hover:to-[#2b3c2f] text-white py-3.5 px-4 rounded-xl font-medium flex items-center justify-between group transition-all mt-4"
            >
              <span className="w-full text-center pl-6">Ingresar al sistema</span>
              <ArrowRight className="h-5 w-5 text-[#C09E5F] group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Separador */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-[#FAFAFA] text-gray-500 font-medium">O continúa con</span>
            </div>
          </div>

          {/* Botones Alternativos */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <button className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 border border-gray-200 bg-white rounded-xl hover:bg-gray-50 transition-colors">
              <Fingerprint className="h-5 w-5 text-gray-600" />
              <span className="text-xs font-bold text-gray-700">CURP</span>
            </button>
            <button className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 border border-gray-200 bg-white rounded-xl hover:bg-gray-50 transition-colors">
              <ShieldCheck className="h-5 w-5 text-gray-600" />
              <span className="text-xs font-bold text-gray-700">Certificado digital</span>
            </button>
            <button className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 border border-gray-200 bg-white rounded-xl hover:bg-gray-50 transition-colors">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="text-xs font-bold text-gray-700 text-center">Correo institucional</span>
            </button>
          </div>

          {/* Footer de Seguridad y Créditos */}
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C09E5F]" />
                <span className="text-xs font-bold text-gray-500">Conexión segura SSL 256 bits</span>
              </div>
              <span className="text-[11px] text-gray-400">Tus datos están protegidos</span>
            </div>

            <div className="w-full border-t border-gray-200 pt-6">
              <p className="text-xs font-medium text-gray-400">
                Software desarrollado por <span className="font-bold text-[#C09E5F]">Softvana</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}