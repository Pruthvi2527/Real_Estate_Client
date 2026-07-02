import { Container } from '@/components/ui/Container';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-white">
      <Container className="py-8">
        <p className="text-center text-sm text-slate-500">
          Real Estate CRUD &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};
