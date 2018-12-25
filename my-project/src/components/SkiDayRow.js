import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faMountain } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export const SkiDayRow = ({resort, date,
							powder, backcountry}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{resort}
		</td>
		<td>
			{(powder) ? <FontAwesomeIcon icon={faSnowflake} />: null}
		</td>
		<td>
			{(backcountry) ? <FontAwesomeIcon icon={faMountain} /> : null}
		</td>
	</tr>

)

SkiDayRow.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool,
	backcountry: PropTypes.bool
}
