import { GripHorizontal } from 'lucide-react';
import { XCircle } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { AlignRight } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { Check } from 'lucide-react';

import { useGlobalStore } from '../../store/auth';
import { useState } from 'react';

const labelClasses = ['#FF0000', '#00FFFF', '#EADDCA', '#00FF00'];

function EventModal() {
  const showOrHideEventModal = useGlobalStore((state) => state.showOrHideEventModal);

  // form states

  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const selectedDay = useGlobalStore((state) => state.selectedDay);
  const [selectedLabel, setselectedLabel] = useState('');

  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <form className="w-1/4 rounded bg-white shadow-2xl">
        <header className="flex items-center justify-between bg-gray-100 px-4 py-2">
          <span>
            <GripHorizontal />
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              showOrHideEventModal(false);
            }}
          >
            <span className="text-gray">
              <XCircle />
            </span>
          </button>
        </header>
        {/* MODAL BODY */}
        <div className="p-3">
          <div className="tailwind_1-5_grid grid items-end gap-y-7">
            <div></div>
            <input
              type="text"
              className="w-full border-0 border-b-2 border-gray-600 pb-2 pt-3 text-xl font-semibold text-gray-600 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-0"
              required
              name="title"
              placeholder="Titulo de Cita"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
            <span className="text-gray-400">
              <Calendar />
            </span>
            <p>{selectedDay?.format('dddd, MMMM DD')}</p>
            <span className="text-gray-400">
              <AlignRight />
            </span>
            <input
              type="text"
              className="w-full border-0 border-b-2 border-gray-600 pb-2 pt-3 font-bold text-gray-600 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-0"
              required
              name="title"
              placeholder="Descripcion de la Cita"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <span>
              <Bookmark />
            </span>
            <div className="flex gap-x-2">
              {labelClasses.map((labelClass, index) => {
                const style = { background: labelClass };
                return (
                  <span
                    onClick={() => setselectedLabel(labelClass)}
                    className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-white`}
                    style={style}
                    key={index}
                  >
                    {/* // if the selected label equals label class display this */}

                    {selectedLabel === labelClass && <Check />}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <footer className="mt-5 flex justify-end p-3">
          <button type="submit" className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
            Guardar
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
