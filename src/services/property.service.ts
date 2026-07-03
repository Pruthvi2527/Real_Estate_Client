import { ApiClient, api } from '@/services/api';
import {
  CreatePropertyInput,
  Property,
  UpdatePropertyInput,
} from '@/types/property.types';

const BASE_PATH = '/properties';

export class PropertyService {
  constructor(private readonly client: ApiClient = api) {}

  getProperties(options?: { force?: boolean }): Promise<Property[]> {
    const config = options?.force
      ? { params: { _t: Date.now() } }
      : undefined;

    return this.client.get<Property[]>(BASE_PATH, config);
  }

  getProperty(id: string): Promise<Property> {
    return this.client.get<Property>(`${BASE_PATH}/${id}`);
  }

  createProperty(input: CreatePropertyInput): Promise<Property> {
    return this.client.post<Property, CreatePropertyInput>(BASE_PATH, input);
  }

  updateProperty(id: string, input: UpdatePropertyInput): Promise<Property> {
    return this.client.put<Property, UpdatePropertyInput>(
      `${BASE_PATH}/${id}`,
      input
    );
  }

  deleteProperty(id: string): Promise<Property> {
    return this.client.delete<Property>(`${BASE_PATH}/${id}`);
  }
}

export const propertyService = new PropertyService();
