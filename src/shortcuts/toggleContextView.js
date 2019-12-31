import React from 'react'
import { store } from '../store.js'

const toggleContextViewSVG = ({ fill = 'black' }) => <svg version="1.1" className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 226.99 226.99" enableBackground="new 0 0 226.99 226.99">
    <g>
        <path d="m224.248,67.252c-2.908-5.432-7.757-9.405-13.654-11.189-5.897-1.785-12.136-1.165-17.567,1.743-5.431,2.909-9.405,7.758-11.189,13.655-1.189,3.928-1.286,8.004-0.376,11.895l-24.905,13.336c-7.575-10.635-19.383-18.044-32.95-19.751v-21.253c9.818-2.648 17.065-11.626 17.065-22.269 0-12.718-10.347-23.065-23.065-23.065s-23.066,10.347-23.066,23.066c0,10.643 7.248,19.621 17.065,22.269v21.251c-17.328,2.181-31.795,13.664-38.223,29.284l-27.257-7.344c0.006-3.997-1.012-7.945-3.06-11.502-3.073-5.34-8.042-9.164-13.99-10.767-12.284-3.31-24.963,3.991-28.272,16.271-1.603,5.949-0.793,12.166 2.28,17.505s8.042,9.164 13.99,10.767c1.997,0.538 4.023,0.804 6.038,0.804 3.985,0 7.92-1.043 11.468-3.084 3.557-2.047 6.421-4.948 8.424-8.407l27.258,7.345c-0.294,2.141-0.459,4.322-0.459,6.543 0,11.021 3.759,21.175 10.049,29.27l-19.985,19.985c-8.814-5.064-20.274-3.859-27.798,3.663-8.993,8.993-8.993,23.626 0,32.62 4.497,4.497 10.403,6.745 16.31,6.745 5.906,0 11.813-2.248 16.31-6.745 7.523-7.524 8.728-18.984 3.663-27.797l19.985-19.985c8.095,6.29 18.248,10.049 29.27,10.049s21.175-3.759 29.27-10.049l19.985,19.985c-5.064,8.814-3.86,20.274 3.663,27.797 4.497,4.497 10.403,6.745 16.31,6.745 5.907,0 11.813-2.249 16.31-6.745 8.993-8.993 8.993-23.626 0-32.62-7.523-7.523-18.984-8.727-27.797-3.663l-19.985-19.985c6.29-8.095 10.049-18.248 10.049-29.27 0-6.021-1.13-11.781-3.171-17.093l24.887-13.326c2.734,2.915 6.18,5.093 10.109,6.282 2.208,0.668 4.465,0.999 6.709,0.999 3.748,0 7.461-0.924 10.858-2.743 5.432-2.908 9.405-7.757 11.189-13.654s1.163-12.137-1.745-17.568zm-15.111,20.642c-2.605,1.396-5.598,1.693-8.427,0.836-2.829-0.855-5.155-2.762-6.55-5.368-1.396-2.605-1.692-5.599-0.836-8.428 0.855-2.829 2.762-5.155 5.368-6.55 1.63-0.873 3.411-1.316 5.209-1.316 1.076,0 2.159,0.159 3.218,0.479 2.829,0.855 5.155,2.762 6.55,5.368 1.396,2.605 1.692,5.598 0.836,8.427-0.855,2.831-2.762,5.157-5.368,6.552zm-55.727,36.46c0,19.742-16.062,35.804-35.804,35.804s-35.804-16.062-35.804-35.804 16.062-35.804 35.804-35.804 35.804,16.062 35.804,35.804zm-46.869-90.934c0-6.102 4.964-11.065 11.065-11.065s11.065,4.964 11.065,11.065c0,6.101-4.964,11.065-11.065,11.065s-11.065-4.964-11.065-11.065zm-86.345,76.147c-2.854-0.769-5.237-2.604-6.711-5.165-1.475-2.562-1.863-5.544-1.094-8.398 1.587-5.892 7.672-9.393 13.563-7.806 2.854,0.769 5.237,2.603 6.712,5.165 1.474,2.562 1.862,5.544 1.093,8.398-1.587,5.892-7.67,9.393-13.563,7.806zm36.007,91.839c-4.313,4.314-11.334,4.314-15.649,0-4.314-4.314-4.314-11.334 0-15.649 2.157-2.157 4.991-3.235 7.825-3.235 2.833,0 5.667,1.079 7.824,3.235 4.314,4.315 4.314,11.335 0,15.649zm138.455-15.649c4.314,4.314 4.314,11.334 0,15.649-4.313,4.314-11.334,4.314-15.649,0-4.314-4.314-4.314-11.334 0-15.649 2.157-2.157 4.991-3.235 7.825-3.235 2.833,0 5.667,1.078 7.824,3.235z" fill={fill} />
    </g>
</svg>

export default {
  id: 'toggleContextView',
  name: 'Toggle Context View',
  description: 'Open the context view of the current thought in order to see all of the different contexts in which that thought can be found. Use the same shortcut to close the context view.',
  gesture: 'ru',
  keyboard: { key: 's', shift: true, meta: true },
  svg: toggleContextViewSVG,
  exec: () => store.dispatch({ type: 'toggleContextView' })
}
