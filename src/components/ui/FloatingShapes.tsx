const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top right glow */}
      <div 
        className="floating-shape w-96 h-96 -top-48 -right-48 animate-float"
        style={{ animationDelay: "0s" }}
      />
      
      {/* Bottom left glow */}
      <div 
        className="floating-shape w-80 h-80 -bottom-40 -left-40 animate-float-delayed"
        style={{ animationDelay: "3s" }}
      />
      
      {/* Center accent */}
      <div 
        className="floating-shape w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ animationDuration: "25s" }}
      />
      
      {/* Small floating dots */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/40 animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-primary/30 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-primary/50 animate-pulse-slow" style={{ animationDelay: "2s" }} />
    </div>
  );
};

export default FloatingShapes;
