/*
 * Copyright (C) 2018 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {Assignment} from '../graphqlData/Assignment'
import AvailabilityDates from '../../shared/AvailabilityDates'
import Flex, {FlexItem} from '@instructure/ui-layout/lib/components/Flex'
import I18n from 'i18n!assignments_2'
import lockedSVG from '../SVG/Locked.svg'
import React from 'react'
import Text from '@instructure/ui-elements/lib/components/Text'

function LockedAssignment(props) {
  const {assignment} = props
  return (
    <Flex textAlign="center" justifyItems="center" margin="0 0 large" direction="column">
      <FlexItem>
        <img alt={I18n.t('Assignment Locked')} src={lockedSVG} />
      </FlexItem>
      <FlexItem>
        <Text size="x-large">{I18n.t('Availability Dates')}</Text>
      </FlexItem>
      <FlexItem>
        <Text size="large">
          <AvailabilityDates assignment={assignment} formatStyle="short" />
        </Text>
      </FlexItem>
    </Flex>
  )
}

LockedAssignment.propTypes = {
  assignment: Assignment.shape
}

export default React.memo(LockedAssignment)
