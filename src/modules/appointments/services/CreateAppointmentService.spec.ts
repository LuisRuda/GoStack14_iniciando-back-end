import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointment from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointment(fakeAppointmentsRepository);

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '21321412',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('21321412');
  });

  // it('should not be able to create two appointments on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
