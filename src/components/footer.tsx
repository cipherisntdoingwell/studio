export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-center px-4 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {currentYear} Cipheron. All rights reserved.</p>
      </div>
    </footer>
  );
}
