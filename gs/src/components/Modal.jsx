// src/components/Modal.jsx
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function Modal({ user, onClose }) {
  const handleRecommend = () => alert(`Você recomendou ${user.nome}!`);
  const handleMessage = () => alert(`Enviando mensagem para ${user.nome}...`);

  return (
    <div 
      onClick={onClose} 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    >
      {/* AUMENTAMOS O TAMANHO de max-w-2xl para max-w-4xl */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="bg-white p-6 sm:p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto dark:bg-gray-800"
      >
        <button onClick={onClose} className="absolute top-4 right-5 font-bold text-2xl dark:text-white">&times;</button>
        
        {/* --- Cabeçalho do Modal --- */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b dark:border-gray-700">
          <img src={user.foto} alt={user.nome} className="w-32 h-32 rounded-full flex-shrink-0" />
          <div className="text-center sm:text-left flex-grow">
            <h2 className="text-3xl font-bold dark:text-white">{user.nome}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">{user.cargo}</p>
            <p className="text-md text-gray-500 dark:text-gray-400 mt-1">{user.localizacao}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Área de Atuação: {user.area}</p>
          </div>
          <div className="flex flex-col sm:ml-auto gap-2 w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0">
            <button onClick={handleRecommend} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
              Recomendar
            </button>
            <button onClick={handleMessage} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg w-full hover:bg-gray-400">
              Enviar Mensagem
            </button>
          </div>
        </div>

        {/* --- Corpo do Modal (Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          
          {/* Coluna Esquerda (Principal) */}
          <div className="lg:col-span-2 space-y-6">
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">Resumo</h3>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{user.resumo}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Experiência</h3>
              <ul className="space-y-4">
                {user.experiencias.map((exp, index) => (
                  <li key={index} className="flex gap-4">
                    <BriefcaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg dark:text-white">{exp.cargo}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{exp.empresa}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.inicio} - {exp.fim}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* (Aqui você adicionaria Formação, etc.) */}
          </div>

          {/* Coluna Direita (Sidebar) */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {user.habilidadesTecnicas.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full dark:bg-blue-200 dark:text-blue-800 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* (Aqui você adicionaria Soft Skills, Interesses, etc.) */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;