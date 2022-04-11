import courses from "./index.json";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

//export const getAllCourses = () => {
/*
  return {
    data: courses,
    courseMap: courses.reduce((a, c, i) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {})
  }*/

export const getAllCourses = () => {
  return axios.get("http://localhost:2001/api/v1/courses").then((res) => {
    return {
      data: `${res}`,
      courseMap: `${res}`.reduce((a, c, i) => {
        a[c.id] = c;
        a[c.id].index = i;
        return a;
      }, {}),
    };
  });
};
