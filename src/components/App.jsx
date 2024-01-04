import Home from 'pages/Home/home';
import Login from 'pages/Login/login';
import Register from 'pages/Register/register';
import { Route, Routes } from 'react-router-dom';
import Phonebook from 'pages/Phonebook/phonebook';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from '../redux/auth/authOperations';
import { PrivateRoute } from '../redux/Routes/privateRoute';
import { PublicRoute } from '../redux/Routes/publicRoute';
import { selectError, selectIsRefreshing } from '../redux/auth/authSelectors';
import { Loader } from 'components/Loader/loader';
import { toast } from 'react-toastify';
import { NotFound } from 'components/NotFound/notFound';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshThunk());
    if (error) {
      toast(error);
    }
  }, [dispatch, error]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
