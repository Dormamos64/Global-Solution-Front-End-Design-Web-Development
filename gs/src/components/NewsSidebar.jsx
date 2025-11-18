import { useState, useEffect } from 'react';

const NewsSidebar = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    fetch('http://localhost:3001/noticias')
      .then((res) => res.json())
      .then((data) => {
        setNoticias(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const currentNews = noticias.slice(0, visibleCount);

  if (loading) {
      return <div className="text-gray-500 text-sm p-4 animate-pulse">Carregando notícias...</div>;
  }

  return (
    <aside className="w-full h-fit space-y-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="font-bold text-gray-800 dark:text-white text-lg mb-4 border-b pb-2 border-gray-100 dark:border-gray-700 flex items-center gap-2">
            📢 Últimas Notícias
        </h2>
        
        <div className="space-y-6">
          {noticias.length === 0 ? (
            <p className="text-sm text-gray-500">Nenhuma notícia disponível.</p>
          ) : (
            currentNews.map((news) => (
              <div 
                key={news.id} 
                className="group block bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-transparent hover:border-blue-200 dark:hover:border-gray-600 cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-md mb-2 aspect-video w-full">
                  <img 
                      src={news.imagem} 
                      alt={news.titulo} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = 'https://placehold.co/600x400/1e293b/FFF?text=News';
                      }}
                  />
                  <span className="absolute top-2 left-2 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                    {news.categoria}
                  </span>
                </div>
                
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {news.titulo}
                </h3>
                
                <div className="flex justify-between items-center mt-2 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  <span>{news.data}</span>
                  <span className="flex items-center gap-1 bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-300">
                    ❤️ {news.likes}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {visibleCount < noticias.length && (
          <button 
            onClick={handleLoadMore}
            className="w-full mt-6 py-2 text-sm text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors border border-dashed border-blue-200 dark:border-gray-600"
          >
            Ver mais notícias ▼
          </button>
        )}

      </div>
    </aside>
  );
};

export default NewsSidebar;