function Container({ children }) {
  return (
    <div className="max-w-8xl  p-8  mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
}

export default Container;