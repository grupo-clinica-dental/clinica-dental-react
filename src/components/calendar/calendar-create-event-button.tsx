import { useGlobalStore } from '../../store/auth';

function CreateEvenButton() {
  const showOrHideEventModal = useGlobalStore((state) => state.showOrHideEventModal);

  return (
    <button onClick={() => showOrHideEventModal(true)} className="flex items-center rounded-full border p-2 shadow-md hover:shadow-2xl">
      <img src="https://blogdh.any.do/wp-content/uploads/2019/07/Screen-Shot-2019-07-09-at-4.46.50-PM.png" alt="create-event" className="h-7 w-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
}

export default CreateEvenButton;
