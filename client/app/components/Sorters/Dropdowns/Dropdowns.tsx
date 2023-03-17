import React, { useCallback, useState } from 'react';
import './Dropdowns.scss';
import classNames from 'classnames';

interface Props {
  title: string;
  field: string | number;
  options: string[] | number[];
  onSelect: (item: any) => void;
}

export const Dropdown: React.FC<Props> = ({
  title,
  field,
  options,
  onSelect,
}) => {
  const [isFocusing, setIsFocusing] = useState(false);

  const handleFocus = useCallback(() => setIsFocusing((prev) => !prev), [])

  return (
    <div className="dropdown">
      <span className="dropdown__title">{title}</span>

      <button
        type="button"
        className={classNames('dropdown__field', {
          'dropdown__field--focused': isFocusing,
        })}
        onClick={handleFocus}
      >
        <span className="dropdown__field--default-name">{field}</span>
        <svg
          className="dropdown__button"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.47173 0.528636C9.73208 0.788986 9.73208 1.2111 9.47173 1.47145L5.47173 5.47144C5.21138 5.73179 4.78927 5.73179 4.52892 5.47144L0.528921 1.47144C0.268571 1.2111 0.268571 0.788985 0.528921 0.528636C0.78927 0.268286 1.21138 0.268286 1.47173 0.528636L5.00033 4.05723L8.52892 0.528636C8.78927 0.268287 9.21138 0.268287 9.47173 0.528636Z"
            fill="#B4BDC4"
          />
        </svg>
      </button>

      <div
        className={classNames('dropdown__options', {
          'dropdown__options--hidden': !isFocusing,
        })}
      >
        {options.map((option, idx) => (
          <button
            type="button"
            key={`${idx}-${option}`}
            className="dropdown__field dropdown__field--option"
            onClick={() => {
              onSelect(option);
              setIsFocusing(false);
            }}
          >
            <span className="dropdown__field--name">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
