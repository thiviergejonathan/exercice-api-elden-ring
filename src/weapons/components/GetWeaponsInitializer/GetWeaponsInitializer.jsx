import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import WeaponService from "../../service/WeaponService";
import { useDispatch } from "react-redux";
import { addWeapons } from "../../store/weaponSlice";

const weaponService = new WeaponService();

const GetWeaponsInitializer = () => {
  const [startQuery, setStartQuery] = useState(false);
  const onClick = () => setStartQuery(true);

  const { data } = useQuery({
    queryKey: ["weapons"],
    queryFn: () => weaponService.getAllWeapons(),
    enabled: startQuery,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addWeapons(data.data));
    }
  }, [data]);

  return (
    <button type="button" onClick={onClick}>
      Start Query
    </button>
  );
};

export default GetWeaponsInitializer;
