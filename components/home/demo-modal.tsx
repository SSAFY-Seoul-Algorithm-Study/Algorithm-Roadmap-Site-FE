import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

let title:string = "";
let content:string = ""
let image:string = ""

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://www.acmicpc.net/workbook/view/1064">
            <Image
              src={image}
              alt="Algorithm Image"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
              />
          </a>
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">
            {content}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function setModalAttribute(newTitle: string, newContent: string, newImage: string) {
  
  title = newTitle;
  content = newContent;
  image = newImage;
}

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}