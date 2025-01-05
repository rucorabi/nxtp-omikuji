"use client";

import React from "react";
import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { Fortune } from "../../Fortunes";
import { fortunes } from "../fortunes";

const FortuneCard = ({ fortune }: { fortune: Fortune }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      <Link
        href={`/result/${fortune.id}`}
        style={{
          textDecoration: "none",
          display: "block",
          height: "100%",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: (theme) => theme.shadows[4],
            },
            cursor: "pointer",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={fortune.image}
              alt={fortune.result}
              sx={{
                aspectRatio: "16/9",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: 1,
                px: 1,
                py: 0.5,
              }}
            >
              {fortune.result}
            </Box>
          </Box>
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              pb: 2,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {fortune.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

const Component = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        おみくじ画像ギャラリー
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
          width: "100%",
        }}
      >
        {fortunes.map((fortune) => (
          <FortuneCard key={fortune.id} fortune={fortune} />
        ))}
      </Box>
    </Container>
  );
};

export default Component;
