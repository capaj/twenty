import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Matches,
  ValidateIf,
} from 'class-validator';

export class FieldMetadataDefaultValueString {
  @ValidateIf((_object, value) => value !== null)
  @IsString()
  value: string | null;
}

export class FieldMetadataDefaultValueNumber {
  @ValidateIf((_object, value) => value !== null)
  @IsNumber()
  value: number | null;
}

export class FieldMetadataDefaultValueBoolean {
  @ValidateIf((_object, value) => value !== null)
  @IsBoolean()
  value: boolean | null;
}

export class FieldMetadataDefaultValueStringArray {
  @ValidateIf((_object, value) => value !== null)
  @IsArray()
  @IsString({ each: true })
  value: string[] | null;
}

export class FieldMetadataDefaultValueDateTime {
  @ValidateIf((_object, value) => value !== null)
  @IsDate()
  value: Date | null;
}

export class FieldMetadataDefaultValueLink {
  @ValidateIf((_object, value) => value !== null)
  @IsString()
  label: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  url: string | null;
}

export class FieldMetadataDefaultValueCurrency {
  @ValidateIf((_object, value) => value !== null)
  @IsNumberString()
  amountMicros: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  currencyCode: string | null;
}

export class FieldMetadataDefaultValueFullName {
  @ValidateIf((_object, value) => value !== null)
  @IsString()
  firstName: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  lastName: string | null;
}

export class FieldMetadataDefaultValueAddress {
  @ValidateIf((_object, value) => value !== null)
  @IsString()
  addressStreet1: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  addressStreet2: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  addressState: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  addressPostcode: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  addressCountry: string | null;

  @ValidateIf((_object, value) => value !== null)
  @IsNumber()
  addressLat: number | null;

  @ValidateIf((_object, value) => value !== null)
  @IsNumber()
  addressLng: number | null;
}

export class FieldMetadataDynamicDefaultValueUuid {
  @Matches('uuid')
  @IsNotEmpty()
  @IsString()
  type: 'uuid';
}

export class FieldMetadataDynamicDefaultValueNow {
  @Matches('now')
  @IsNotEmpty()
  @IsString()
  type: 'now';
}
