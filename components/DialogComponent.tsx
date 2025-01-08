import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ModalProps {
  buttonLabel: string;
  title: string;
  component: React.ReactNode;
}

export default function GeneralModal({
  buttonLabel,
  title,
  component,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="submit"
          className="w-32 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-auto h-[90%] p-4 bg-black border-2 shadow-xl shadow-purple-800 border-purple-500">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl font-bold text-purple-600 font-mono">
            {title}
          </DialogTitle>
        </DialogHeader>
        {/* Render the passed component */}
        {component}
      </DialogContent>
    </Dialog>
  );
}
