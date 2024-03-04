import { z } from 'zod';

import { FieldFullNameValue } from '../FieldMetadata';

const currencySchema = z.object({
  street1: z.string(),
  street2: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

export const isFieldAddressValue = (
  fieldValue: unknown,
): fieldValue is FieldFullNameValue =>
  currencySchema.safeParse(fieldValue).success;
