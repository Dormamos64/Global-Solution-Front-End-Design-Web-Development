function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-12 py-6 text-center">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} SmartWork - Global Solution FIAP. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;