import React, { FC, SelectHTMLAttributes, useCallback, ChangeEventHandler } from 'react';
import * as styles from './styles.module.scss';
import { FaIcon } from '../FaIcon';
import classNames from 'classnames';

type IProps = SelectHTMLAttributes<HTMLSelectElement> & {
  handler?: (val: string) => void;
  label?: string;
  options: Record<string, string>;
  icon?: string;
  fa_icon?: string;
};

const Select: FC<IProps> = ({ handler, label, options, icon, fa_icon, placeholder, ...props }) => {
  const onChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    event => {
      if (handler) handler(event.target.value);
    },
    [handler]
  );

  return (
    <div
      className={classNames(styles.select, {
        [styles.has_icon]: icon || fa_icon,
      })}
    >
      {' '}
      {label && <div className={styles.label}>{label}:</div>}
      {fa_icon && <FaIcon icon={fa_icon} />}
      {icon && <img src={icon} alt="icon" />}
      <select onChange={onChange} placeholder="placeholder" {...props}>
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}

        {Object.entries(options).map(([value, title]) => (
          <option value={value} key={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
