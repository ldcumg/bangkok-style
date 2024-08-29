import React, { useEffect } from "react";
import styled from "styled-components";
import supabase from "../../supabaseClient";
import Banner from "../../components/Layout/Banner";
import { useNavigate } from "react-router-dom";

const Section = styled.section``;

const PublicHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const { data } = await supabase.from("posts").select();

    console.log(data);
  };

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const handleLike = () => {
    navigate("/Like");
  };

  const onSignOutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("로그아웃에 실패했습니다.");
      return;
    }
    window.localStorage.removeItem("signIn");
    alert("로그아웃 하였습니다.");
    window.location.reload();
  };

  return (
    <Section>
      <div>그냥 메인 화면</div>
      <button onClick={handleSignIn}>로그인</button>
      <button type="submit" onClick={onSignOutHandler}>
        로그아웃
      </button>
      <button onClick={handleSignUp}>회원가입</button>
      <button onClick={handleLike}>좋아요</button>
      <Banner />
    </Section>
  );
};

export default PublicHome;
