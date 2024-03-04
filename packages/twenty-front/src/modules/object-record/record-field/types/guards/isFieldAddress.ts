import { FieldDefinition } from '../FieldDefinition';
import { FieldFullNameMetadata, FieldMetadata } from '../FieldMetadata';

export const isFieldAddress = (
  field: Pick<FieldDefinition<FieldMetadata>, 'type'>,
): field is FieldDefinition<FieldFullNameMetadata> => field.type === 'ADDRESS';
