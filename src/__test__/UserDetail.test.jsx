import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserDetail from '../Components/Props/UserDetail';
describe('UserDetail', () => {
  it('should render user details', () => {
    // // Create mock props that match the PropTypes requirements
    const mockProp = {
      id: 1,
      username: "testuser",
      email: "test@example.com"
    };

    render(<UserDetail prop={mockProp}/>);
    // expect(result.container).toMatchSnapshot();
    expect(screen.getByText('Username: testuser')).toBeInTheDocument();
  
  });
});
