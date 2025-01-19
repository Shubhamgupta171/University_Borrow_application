import { useRecoilValue } from "recoil";
import EmptyState from "../components/EmptyState";
import { ListingReservationState, userAuthState } from "../recoil/atoms";
import BookingsClient from "../components/BookingsClient";
//import TripsClient from "../components/BookingsClient";

const BookingsPage:React.FC<any> = () => {
  const userState  = useRecoilValue(userAuthState)

  if (!userState.isAuthenticated) {
    return (
      <EmptyState title="Unauthorized" subtitle="Please login"/>
    );
  }

  const reservations = useRecoilValue(ListingReservationState({ userId: userState.userId }));

  if (reservations.length === 0) {
    return (
      <EmptyState title="No trips found" subtitle="Looks like you havent reserved any trips."/>
    );
  }
  return (
    <BookingsClient reservations={reservations}/>
  );
}
 
export default BookingsPage;

