import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import listItemStyle from '../ListItem/style/ListItem.scss';
import componentStyle from './style/ExchangesListItem.scss';

const ExchangesListItem = ({
  fromSemester, fromWeekDays, fromTime,
  toSemester, toWeekDays, toTime, style,
}) => (
  <ListItem
    style={{
      ...listItemStyle,
      root: style.root,
      container: style.container,
    }}
  >
    <p className={style.exchangeRow}>
      <span className={style.from}>
        <span className={style.separator}>De: </span>
        <span>{`${fromSemester}º semestre ${fromWeekDays} ${fromTime} `}</span>
      </span>
      <span className={style.to}>
        <span className={style.separator}>para: </span>
        <span>{`${toSemester}º semestre ${toWeekDays} ${toTime}`}</span>
      </span>
    </p>
    <p className={style.exchangeMetadataRow}>
      <span>Publicado por: </span> Usuário
    </p>
  </ListItem>
);

ExchangesListItem.propTypes = {
  fromSemester: PropTypes.number.isRequired,
  fromWeekDays: PropTypes.string.isRequired,
  fromTime: PropTypes.string.isRequired,
  toSemester: PropTypes.number.isRequired,
  toWeekDays: PropTypes.string.isRequired,
  toTime: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

ExchangesListItem.defaultProps = {
  style: componentStyle,
};

export default ExchangesListItem;
