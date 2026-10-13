import { generateContract } from '../server/src/services/pdfContractService.js';
const lease = {
  id: 'layout-preview', startDate: '2026-01-01', endDate: '2026-12-31', rentAmount: 850000, depositAmount: 850000, paymentFrequency: 'Monthly',
  tenant: { fullName: 'Sample Tenant', phone: '+255 700 123 456', email: 'tenant@example.com', idNumber: 'ID-123456' },
  owner: { name: 'Sample Property Owner', email: 'owner@example.com', phone: '+255 700 654 321' },
  unit: { propertyName: 'Kinondoni Apartments', name: 'Apartment 204', address: 'Kinondoni, Dar es Salaam' }
};
console.log(await generateContract(lease, 'en'));

