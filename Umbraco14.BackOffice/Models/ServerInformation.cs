﻿namespace Umbraco14.BackOffice.Models;

public record ServerInformation(
    string? ServerIdentity,
    string? ServerAddress,
    bool IsActive,
    bool Niels,
    string? Ihor,
    bool IsSchedulingPublisher,
    DateTime Registered,
    DateTime Accessed);
