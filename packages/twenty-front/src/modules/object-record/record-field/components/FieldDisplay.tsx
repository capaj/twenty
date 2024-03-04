import { useContext } from 'react';

import { FieldContext } from '../contexts/FieldContext';
import { ChipFieldDisplay } from '../meta-types/display/components/ChipFieldDisplay';
import { CurrencyFieldDisplay } from '../meta-types/display/components/CurrencyFieldDisplay';
import { DateFieldDisplay } from '../meta-types/display/components/DateFieldDisplay';
import { EmailFieldDisplay } from '../meta-types/display/components/EmailFieldDisplay';
import { LinkFieldDisplay } from '../meta-types/display/components/LinkFieldDisplay';
import { PhoneFieldDisplay } from '../meta-types/display/components/PhoneFieldDisplay';
import { RelationFieldDisplay } from '../meta-types/display/components/RelationFieldDisplay';
import { SelectFieldDisplay } from '../meta-types/display/components/SelectFieldDisplay';
import { UuidFieldDisplay } from '../meta-types/display/components/UuidFieldDisplay';
import { isFieldAddress } from '../types/guards/isFieldAddress';
import { isFieldCurrency } from '../types/guards/isFieldCurrency';
import { isFieldDateTime } from '../types/guards/isFieldDateTime';
import { isFieldEmail } from '../types/guards/isFieldEmail';
import { isFieldFullName } from '../types/guards/isFieldFullName';
import { isFieldLink } from '../types/guards/isFieldLink';
import { isFieldNumber } from '../types/guards/isFieldNumber';
import { isFieldPhone } from '../types/guards/isFieldPhone';
import { isFieldRelation } from '../types/guards/isFieldRelation';
import { isFieldSelect } from '../types/guards/isFieldSelect';
import { isFieldText } from '../types/guards/isFieldText';
import { isFieldUuid } from '../types/guards/isFieldUuid';

const fieldDisplayArray = [
  { check: isFieldText, component: <ChipFieldDisplay /> },
  { check: isFieldFullName, component: <ChipFieldDisplay /> },
  { check: isFieldNumber, component: <ChipFieldDisplay /> },
  { check: isFieldRelation, component: <RelationFieldDisplay /> },
  { check: isFieldUuid, component: <UuidFieldDisplay /> },
  { check: isFieldEmail, component: <EmailFieldDisplay /> },
  { check: isFieldDateTime, component: <DateFieldDisplay /> },
  { check: isFieldLink, component: <LinkFieldDisplay /> },
  { check: isFieldCurrency, component: <CurrencyFieldDisplay /> },
  { check: isFieldPhone, component: <PhoneFieldDisplay /> },
  { check: isFieldSelect, component: <SelectFieldDisplay /> },
  { check: isFieldAddress, component: <ChipFieldDisplay /> },
];

export const FieldDisplayEffect = () => {
  const { fieldDefinition, isLabelIdentifier } = useContext(FieldContext);

  if (isLabelIdentifier) {
    for (const fieldDisplay of fieldDisplayArray) {
      if (fieldDisplay.check(fieldDefinition)) {
        return fieldDisplay.component;
      }
    }
  }

  return null;
};

export const FieldDisplay = () => {
  return <FieldDisplayEffect />;
};
