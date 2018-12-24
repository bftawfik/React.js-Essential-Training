import '../stylesheets/ui.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faSnowflake, faMountain } from '@fortawesome/free-solid-svg-icons'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{total}</span>
			<FontAwesomeIcon icon={faCalendarAlt} />
			<span>days</span>
		</div>
		<div className="powder-days">
			<span>{powder}</span>
			<FontAwesomeIcon icon={faSnowflake} />
			<span>days</span>
		</div>
		<div className="backcountry-days">
			<span>{backcountry}</span>
			<FontAwesomeIcon icon={faMountain} />
			<span>days</span>
		</div>
		<div>
			<span>
				{calcGoalProgress(
					total,
					goal
				)}
			</span>
		</div>
	</div>
)
