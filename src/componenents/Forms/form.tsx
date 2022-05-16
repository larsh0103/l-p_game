import React, { useState } from 'react';
import { useDropdown, useDisplayForm } from '../../context/context'
import Button from '../../Buttons/button';
import { dbCall } from '../../api-client/supabaseclient';

function Form(props) {
  const { dropdownChoice, setDropdownChoice } = useDropdown();
  const { showFormState, showForm, hideForm } = useDisplayForm();
  const [content, setContent] = useState('')
  const [wordCounter, setWordCounter] = useState(0)

  const handleBack = () => {

  }

  const handleRule = (e) => {
    e.preventDefault()
    hideForm()
    dbCall({ type: dropdownChoice, content: content });
  }

  return (
    <form onSubmit={handleRule} >
      <div id="form-div" className='m-auto w-1/5 my-20'>
        <p className='bg-white border-b-4 border-r-4 text-black text-center mb-2'>Sender nå inn <br></br>{dropdownChoice}</p>
      </div>
      <textarea autoFocus className='p-2 h-34 w-72' rows="4" type="text" onChange={(e) => setContent(e.target.value)} maxLength="50" placeholder='Endre på nedtrekksmenyen over for å sende inn et spm til den respektive kategorien valgt' />
      <div>
        <Button onClick={(e) => handleRule(e)}>
          <svg className="h-30 w-28" viewBox="0 0 177 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="88.0531" cy="47.9303" rx="83.7306" ry="36.4046" transform="rotate(-8.16723 88.0531 47.9303)" fill="black" />
            {/* <path d="M60.2049 36.5074C56.4609 36.5074 52.1409 38.3314 52.1409 42.6194C52.1409 46.4274 55.1809 47.8994 58.2209 48.6034L61.1329 49.2434C64.3969 49.9474 67.1489 51.2594 67.1489 54.1074C67.1489 57.5634 63.2449 58.4914 60.7169 58.4914C56.9409 58.4914 54.3489 56.8274 53.5489 53.1474H51.3089C51.8209 57.3074 55.0209 60.5394 60.8129 60.5394C65.3249 60.5394 69.3889 58.2034 69.3889 53.7554C69.3889 49.3394 64.9409 47.9954 61.5809 47.2274L58.8289 46.6194C56.2369 46.0434 54.3489 44.8594 54.3489 42.5234C54.3489 39.4834 57.6449 38.5554 59.9809 38.5554C63.5009 38.5554 65.8049 40.0274 66.6049 42.7154H68.8449C68.0129 38.7794 64.7489 36.5074 60.2049 36.5074ZM73.1814 39.0354V42.9074H70.3334V44.6354H73.1814V56.0274C73.1814 59.4194 73.8854 60.1234 76.9574 60.1234H78.5894V58.3314H77.5654C75.2614 58.3314 75.1974 57.8834 75.1974 55.6434V44.6354H78.5894V42.9074H75.1974V39.0354H73.1814ZM92.8224 57.4994L92.9184 60.1234H94.9344C94.8384 58.2674 94.7424 56.5714 94.7424 54.6194C94.7424 53.2434 94.7744 51.6754 94.7744 49.3074C94.7744 44.1874 92.1184 42.5234 88.1184 42.5234C84.2784 42.5234 81.5264 44.7634 81.0784 48.1554H83.1584C83.3184 45.9154 85.0784 44.2834 87.9904 44.2834C90.4864 44.2834 92.7904 45.1474 92.7904 49.0514V49.6594C84.5024 50.4914 80.6624 51.9314 80.6624 55.8354C80.6624 58.6834 83.1584 60.5394 86.3584 60.5394C89.5584 60.5394 91.7024 59.3234 92.8224 57.4994ZM86.8064 58.7794C84.5344 58.7794 82.8704 57.6274 82.8704 55.8034C82.8704 53.1154 85.8784 52.1874 92.8864 51.4194V52.2514C92.8864 57.1474 90.0064 58.7794 86.8064 58.7794ZM106.496 44.9234V42.8114C106.304 42.7794 106.08 42.7794 105.92 42.7794C103.84 42.7794 101.6 44.0274 100.832 46.0434V42.9074H98.9439V60.1234H100.896V51.0994C100.896 47.4514 102.048 44.8914 105.6 44.8914C105.888 44.8914 106.176 44.8914 106.496 44.9234ZM109.713 39.0354V42.9074H106.865V44.6354H109.713V56.0274C109.713 59.4194 110.417 60.1234 113.489 60.1234H115.121V58.3314H114.097C111.793 58.3314 111.729 57.8834 111.729 55.6434V44.6354H115.121V42.9074H111.729V39.0354H109.713Z" fill="#ADFF00" /> */}
            <text id="start-text" href="#p1" x="50%" y="50%" fill="#ADFF00" textAnchor='middle' alignmentBaseline='middle'>Send inn</text>
          </svg>
        </Button>
        <Button onClick={() => hideForm()}>
          <svg className="h-30 w-28" viewBox="0 0 177 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="88.0531" cy="47.9303" rx="83.7306" ry="36.4046" transform="rotate(-8.16723 88.0531 47.9303)" fill="black" />
            {/* <path d="M60.2049 36.5074C56.4609 36.5074 52.1409 38.3314 52.1409 42.6194C52.1409 46.4274 55.1809 47.8994 58.2209 48.6034L61.1329 49.2434C64.3969 49.9474 67.1489 51.2594 67.1489 54.1074C67.1489 57.5634 63.2449 58.4914 60.7169 58.4914C56.9409 58.4914 54.3489 56.8274 53.5489 53.1474H51.3089C51.8209 57.3074 55.0209 60.5394 60.8129 60.5394C65.3249 60.5394 69.3889 58.2034 69.3889 53.7554C69.3889 49.3394 64.9409 47.9954 61.5809 47.2274L58.8289 46.6194C56.2369 46.0434 54.3489 44.8594 54.3489 42.5234C54.3489 39.4834 57.6449 38.5554 59.9809 38.5554C63.5009 38.5554 65.8049 40.0274 66.6049 42.7154H68.8449C68.0129 38.7794 64.7489 36.5074 60.2049 36.5074ZM73.1814 39.0354V42.9074H70.3334V44.6354H73.1814V56.0274C73.1814 59.4194 73.8854 60.1234 76.9574 60.1234H78.5894V58.3314H77.5654C75.2614 58.3314 75.1974 57.8834 75.1974 55.6434V44.6354H78.5894V42.9074H75.1974V39.0354H73.1814ZM92.8224 57.4994L92.9184 60.1234H94.9344C94.8384 58.2674 94.7424 56.5714 94.7424 54.6194C94.7424 53.2434 94.7744 51.6754 94.7744 49.3074C94.7744 44.1874 92.1184 42.5234 88.1184 42.5234C84.2784 42.5234 81.5264 44.7634 81.0784 48.1554H83.1584C83.3184 45.9154 85.0784 44.2834 87.9904 44.2834C90.4864 44.2834 92.7904 45.1474 92.7904 49.0514V49.6594C84.5024 50.4914 80.6624 51.9314 80.6624 55.8354C80.6624 58.6834 83.1584 60.5394 86.3584 60.5394C89.5584 60.5394 91.7024 59.3234 92.8224 57.4994ZM86.8064 58.7794C84.5344 58.7794 82.8704 57.6274 82.8704 55.8034C82.8704 53.1154 85.8784 52.1874 92.8864 51.4194V52.2514C92.8864 57.1474 90.0064 58.7794 86.8064 58.7794ZM106.496 44.9234V42.8114C106.304 42.7794 106.08 42.7794 105.92 42.7794C103.84 42.7794 101.6 44.0274 100.832 46.0434V42.9074H98.9439V60.1234H100.896V51.0994C100.896 47.4514 102.048 44.8914 105.6 44.8914C105.888 44.8914 106.176 44.8914 106.496 44.9234ZM109.713 39.0354V42.9074H106.865V44.6354H109.713V56.0274C109.713 59.4194 110.417 60.1234 113.489 60.1234H115.121V58.3314H114.097C111.793 58.3314 111.729 57.8834 111.729 55.6434V44.6354H115.121V42.9074H111.729V39.0354H109.713Z" fill="#ADFF00" /> */}
            <text id="start-text" href="#p1" x="50%" y="50%" fill="#ADFF00" textAnchor='middle' alignmentBaseline='middle'>Tilbake</text>
          </svg>
        </Button>
      </div>

      {/* <input className='bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center py-6 px-16 rounded' type="submit" /> */}
    </form>
  );
}

export default Form;
